import * as fs from "fs";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const deleteFile = async (image) => {
  if (!image) return;

  try {
    let imgPath = image.replace(process.env.SERVER_HOST, "");

    let absolutePath = path.join(__dirname, "../../public" + imgPath);

    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
      console.log(`Deleted image: ${absolutePath}`);
    } else {
      console.log(`File not found: ${absolutePath}`);
    }
  } catch (error) {
    console.error(`Failed to delete file: ${image}`, error);
  }
};

export const deleteUserImage = async (imagePath) => {
  if (
    !imagePath ||
    imagePath.includes("no-user.jpg") ||
    imagePath.includes("seed")
  ) {
    return;
  }

  try {
    await deleteFile(imagePath);
  } catch (error) {
    console.error(`Failed to delete image: ${imagePath}`, error);
  }
};

export const deleteBlogImage = async (imagePath) => {
  if (
    !imagePath ||
    imagePath.includes("no-blog.jpg") ||
    imagePath.includes("seed")
  ) {
    return;
  }

  try {
    await deleteFile(imagePath);
  } catch (error) {
    console.error(`Failed to delete image: ${imagePath}`, error);
  }
};
