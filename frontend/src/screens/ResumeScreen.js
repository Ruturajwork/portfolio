import { Flex, Button, Link, Icon, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import pdf from "../Assets/resume.pdf";
import { AiOutlineCloudDownload, AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Ruturajwork/resume/main/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Flex
        w="full"
        direction="column"
        mt="85px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          mt="10"
          mb="5"
          direction="row"
          justifyContent="center"
          alignItems="center"
          _hover={{ shadow: "3px 3px 2px 2px blue" }}
          rounded="md"
          shadow="3px 2px purple"
        >
          <Link
            border="1px solid purple"
            bgColor="blue.200"
            p="2"
            rounded="md"
            shadow="md"
            href={pdf}
            color="white"
            _hover={{ textDecor: "none" }}
          >
            &nbsp;Download CV
            <Icon as={AiOutlineCloudDownload} w="8" h="8" mx="2" />
          </Link>
          <Icon as={AiOutlineCloudDownload} w="8" h="8" mx="2" />
        </Flex>

        <Flex display={{ base: show ? "block" : "none", md: "flex" }}>
          <Document file={resumeLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Flex>

        <Flex
          display={{ base: show ? "block" : "none", md: "flex" }}
          mt="10"
          mb="5"
          direction="row"
          justifyContent="center"
          alignItems="center"
          _hover={{ shadow: "3px 3px 2px 2px blue" }}
          rounded="md"
          shadow="3px 2px purple"
        >
          <Link
            border="1px solid purple"
            bgColor="blue.200"
            rounded="md"
            shadow="md"
            p="4"
            href={pdf}
            color="blue.800"
            fontSize="xl"
            _hover={{ textDecor: "none" }}
          >
            &nbsp;Download CV
            <Icon as={AiOutlineCloudDownload} w="8" h="8" mx="4" />
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default ResumeNew;
