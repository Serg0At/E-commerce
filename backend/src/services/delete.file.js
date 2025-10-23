import fs from "fs";

export default function deleteFiles(imagePath){
    try {
    fs.unlinkSync(imagePath);
  } catch (error) {
    console.error('Ошибка при удалении файла:', error);
  }
}