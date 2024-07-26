import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/assets/images/about-bg.jpg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-5xl">
          <Heading
            center
            title="About"
            subtitle="Learn more about us and our mission."
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <Image
              src="/assets/images/about-building.jpg"
              alt="Grace Church Building"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2 mt-4 md:mt-0 ">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Welcome to Grace Church
              </h2>
              <p className="text-white">
                Grace Church is a vibrant community of believers committed to
                loving God and serving others. Our mission is to reach out to
                the community with the love of Christ and to grow together in
                faith.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
            <Image
              src="/assets/images/about-history.jpg"
              alt="Our History"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Our History
              </h2>
              <p className="text-white">
                Founded in 1990, Grace Church has grown from a small gathering
                of believers to a thriving church with various ministries and
                outreach programs. Our rich history is a testament to God's
                faithfulness and the dedication of our congregation.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <Image
              src="/assets/images/about-comm.jpg"
              alt="Community Outreach"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Community Outreach
              </h2>
              <p className="text-white">
                At Grace Church, we believe in making a positive impact in our
                community. Through various outreach programs, we aim to meet the
                needs of those around us and share the hope and love of Jesus
                Christ.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
            <Image
              src="/assets/images/about-ministries.jpg"
              alt="Our Ministries"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Our Ministries
              </h2>
              <p className="text-white">
                Grace Church offers a variety of ministries to support and
                engage our congregation. From youth groups to adult Bible
                studies, there's something for everyone to grow in their faith
                and connect with others.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <Image
              src="/assets/images/about-service.jpg"
              alt="Worship Services"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Worship Services
              </h2>
              <p className="text-white">
                Join us for worship services every Sunday at 9 AM and 11 AM. Our
                services are a time of dynamic worship, inspiring messages, and
                fellowship. We look forward to welcoming you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
