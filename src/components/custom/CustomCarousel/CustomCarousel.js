import { Box, Card, IconButton, Slide, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomCarousel = ({Children}) => {
    const [cards, setcards] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [direction, setDirection] = useState("left");
    const cardsPerPage = 4
    const duplicateCards = Array.from({
        length: 10
    },
        (_, i) => <Card key={i} > 
   
        </Card>
    );

    const handleNextPage = () => {
        setDirection("left");
        setCurrentPage(prevPage => prevPage + 1)

    }
    const prevPage = () => {
        setDirection("right")
        setCurrentPage(prevPage => prevPage - 1)

    }
    useEffect(() => {
        setcards(duplicateCards)
    }, [])
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            height: "400px"
        }}>
            <IconButton
                onClick={prevPage}
                disabled={currentPage === 0}
                sx={{ margin: 5 }}
            >
                <NavigateBeforeIcon />
            </IconButton>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                height: "400px"
            }}>
                {
                    cards.map((card, index) => (
                        <Box key={`card-${index}`}
                            sx={{
                               
                                display: currentPage === index ? 'block' : 'none'
                            }}
                        >
                            <Slide direction={direction} in={currentPage === index} >
                                <Stack spacing={2} direction={"row"} alignContent={"center"} justifyContent={"center"}>
                                {Children}
                                </Stack>
                            </Slide>
                        </Box>
                    ))
                }
            </Box>

            <IconButton
                onClick={handleNextPage}
                disabled={currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1}
                sx={{ margin: 5 }}
            >
                <NavigateNextIcon />
            </IconButton>
        </Box >
    )
}

export default CustomCarousel