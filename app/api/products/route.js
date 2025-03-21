import { connectToDatabase } from "@/app/lib/mongodb";
import product from "@/app/models/product";

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
    const newProduct = await product.create({
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
