import { utapi } from "@/utils/uploadthings";
import { pipeline } from "@xenova/transformers";

export async function POST(req: Request, res: Response) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];
    const response = await utapi.uploadFiles(files);
    const responseData = response[0].data;
    const url = responseData?.url;

    if (!url) return new Response("Missing URL", { status: 400 });

    const detector = await pipeline(
      "object-detection",
      "Xenova/detr-resnet-50"
    );

    const output = await detector(url, { threshold: 0.9 });
    console.log(output);

    return new Response("dummy response", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Error processing request", { status: 500 });
  }
}
