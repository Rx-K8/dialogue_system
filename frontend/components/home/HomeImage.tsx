"use client";

import { getRandomInt } from "@/utils/math";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomeImage() {
  const imageDirPath = "/Far_view";
  const [imagePath, setImagePath] = useState<string>(
    `${imageDirPath}/001_fullbody.png`,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // ランダムな値の範囲
      // 画像が001~044まで
      const min: number = 1;
      const max: number = 44;

      // 画像の名前が，001や004のように指定されているため，0で埋めて3桁になるようにしている
      const numberDigits: number = 3;
      const paddingNumber: string = "0";

      const randomId: string = String(getRandomInt(min, max)).padStart(
        numberDigits,
        paddingNumber,
      );
      setImagePath(`${imageDirPath}/${randomId}_fullbody.png`);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Image src={imagePath} width={750} height={750} alt={"トップページのailisの画像"} />
  );
}
