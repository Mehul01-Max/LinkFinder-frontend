"use client";
import axios from "axios";
import { Input } from "../../components/ui/input";
import React, { AnyActionArg, useEffect, useState } from "react";
import { Trash, Pencil } from "lucide-react";
import Link from "next/link";
type LinkObj = {
  tags: string[];
  title: string;
  userId: string;
  _id: string;
  url: string;
  createdAt: string;
};
function page() {
  const base = process.env.NEXT_PUBLIC_BACKEND_URL;
  const linkDel = async (id: string) => {
    console.log(id);
    await axios.delete(`${base}/links/${id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    const d = await axios.get(`${base}/links/${links}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setdata(d.data.links);
  };
  const [links, setlinks] = useState("");
  const [data, setdata] = useState<LinkObj[]>([]);
  useEffect(() => {
    const getLinks = async () => {
      console.log(localStorage.getItem("token"));
      const res = await axios.get(`${base}/links/${links}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data.links);
      setdata(res.data.links);
    };
    getLinks();
  }, [links]);

  return (
    <div className="min-h-screen bg-amber-600 p-10">
      <div className="min-h-screen flex flex-col gap-4 max-w-[1400px] mx-auto">
        <Input
          onChange={(e) => {
            setlinks(`?search=${e.target.value}`);
          }}
          className="bg-white"
          placeholder="search..."
        ></Input>
        <div>
          {data.map((d) => {
            return (
              <Link href={`https://${d.url}`} key={d._id}>
                <div className="grid grid-cols-4 place-items-center">
                  <div>{d.title}</div>
                  <div>{d.tags}</div>
                  <div>{d.createdAt}</div>
                  <div className="flex gap-2">
                    <Pencil />
                    <Trash
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        linkDel(d._id);
                      }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
