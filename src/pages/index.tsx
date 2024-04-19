// src/pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {Heading} from "@/components/heading/heading";

export default function Home() {
  return (
    <>
    <Heading level='h1' >COEVOE</Heading>
    </>
  );
}