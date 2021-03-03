import React from "react"
import { Box, Text ,Image} from "@chakra-ui/react"

import Link from 'next/link'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href="/" as="/">   
       <a><Image src='/logo.png'/> </a>
    </Link>
    </Box>
  )
}
