"use client";

import { Button, Image, Spacer } from "@nextui-org/react";

export default function Home() {
  const images = [
    "https://placehold.co/300x200",
    "https://placehold.co/300x200",
    "https://placehold.co/300x200"
    // Add more image URLs as needed
  ];
  return (
    <main className="h-full">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className=" text-6xl font-bold">KENKO BEAUTY & MASSAGE</h1>
        <Spacer y={4} />
        <Button radius="full" size="lg" className=" bg-[#5C7042]">
          จองเลย
        </Button>
      </div>
      <div className="h-full flex flex-col justify-center items-center bg-[#f4f4f5] text-black px-96">
        <h1 className="text-6xl font-bold">เกี่ยวกับ</h1>
        <Spacer y={4} />
        <span className=" font-semibold ">
          ความสุขคือเป้าหมายสำหรับทุกคน
          การมีชีวิตที่ยอดเยี่ยมนั้นมาจากร่างกายที่แข็งแรงประกอบกับจิตใจที่แข็งแรง
          พรีมสปามุ่งสู่แนวคิดนี้และเชื่ออย่างแท้จริงว่าร่างกายและจิตใจเป็นหนึ่งเดียวและเป็นรากฐานสำคัญของการมีสุขภาพที่ดี
          และนั่นคือสิ่งที่ทรีตเมนต์ของเราให้ความสำคัญ
          เราหวังว่าทรีตเมนต์และบริการพิเศษที่หลากหลายของเราโดยนักบำบัด
          ที่มีคุณสมบัติเหมาะสมจะทำให้คุณได้รับประสบการณ์ที่ผ่อนคลายและมีความสุขที่สุดเพราะความพอใจของคุณคือแรงบันดาล
          ใจของเรา
        </span>
        <Spacer y={4} />

        <div className="flex flex-row">
          {images.map((url: string, key: number) => {
            return (
              <Image
                key={key}
                width={300}
                height={200}
                alt={url}
                src={url}
              ></Image>
            );
          })}
        </div>

        <Spacer y={4} />
        <Button radius="full" size="lg" className=" bg-[#5C7042]">
          จองเลย
        </Button>
      </div>
      <div className="h-full flex flex-col justify-center items-center bg-[#f4f4f5] text-black px-96">
        <iframe
          className=" h-full w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.5563516321872!2d100.57831499060538!3d13.724555297229026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f5c3a54aceb%3A0x7d01d010fec4c2bc!2sKenko%20Beauty%20%26%20Massage!5e0!3m2!1sen!2sth!4v1702661761673!5m2!1sen!2sth"
          loading="lazy"
        ></iframe>
      </div>
      {/* <ListAccordion />
      <ChatCard />
      <InfoCard /> */}
    </main>
  );
}
