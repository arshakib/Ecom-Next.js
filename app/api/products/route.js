import { connectToDatabase } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, price, description, image, link } = body;

    if (!name || !price || !description || !image || !link) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const newProduct = await Product.create({
      name,
      price,
      description,
      image,
      link,
    });

    return NextResponse.json(
      { message: "Product created", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");
    if (!productId) {
      const products = await Product.find().sort({ createdAt: -1 });
      return NextResponse.json({ products }, { status: 200 });
    } else {
      const product = await Product.findById(productId);
      return NextResponse.json({ product }, { status: 200 });
    }
  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
