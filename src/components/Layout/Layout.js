import { Box, Collapse, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header/Header'

const Layout = (props) => {



    return (
        <Flex
            flexDirection={"column"}
            w={"1440px"}
            margin={"0 auto"} >
            <Header />
            <Collapse in={true} animateOpacity transition={"1s"}>

                <Box padding={"60px 40px"}>
                    {props.children}
                </Box>
            </Collapse>



        </Flex>
    )
}

export default Layout