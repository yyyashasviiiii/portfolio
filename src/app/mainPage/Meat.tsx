import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { LibraryAdd } from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import beer from "../assets/beer.png";
import nqueens from "../assets/nqueens.png";
import Image from "next/image";
import About from "../ClientComponents/About";
import Experiance from "../ClientComponents/Experience";
import Project from "../ClientComponents/Project";
const Meat = () => {

    return (
        <Grid container spacing={1}>
            <Grid item xl={6} md={6} lg={6} sm={12} className="relative">
                <div className="static lg:fixed">
                    <Box className="w-full md:p-14 p-4 flex flex-col items-start">
                        <h1 className="text-white">Sarthak Bhatt</h1>
                        <h3 className="text-white">Engineer with 1 year experiance </h3>
                        <p style={{ color: "#7B899D" }}>
                            I build pixel-perfect, engaging, and accessible digital
                            experiences.
                        </p>
                    </Box>
                    <Box className="flex flex-col sm:content-between content-start">
                        <Box className="my-10 w-full p-14 flex flex-col  hidden sm:block ">
                            <About />
                            <Experiance />
                            <Project />
                        </Box>
                        <Box className="my-10 w-full md:p-14 p-4  flex gap-6 ">
                            <a href="https://github.com/Saintcyr77">

                                <GitHubIcon className="text-white cursor-pointer" />
                            </a>
                            <a href="https://www.linkedin.com/in/sarthak-bhatt-24b16624b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <LinkedInIcon className="text-white cursor-pointer" />
                            </a>
                            <a href="https://www.goodreads.com/liszt
">

                                <MenuBookIcon className="text-white cursor-pointer" />
                            </a>
                            <InstagramIcon className="text-white cursor-pointer" />
                        </Box>
                    </Box>
                </div>
            </Grid>
            <Grid
                item
                xl={6}
                md={6}
                lg={6}
                sm={12}
                style={{ width: "100%", padding: "0px" }}
            >
                <span className=" md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
                    About
                </span>
                <Box
                    className="w-full md:p-14 p-4 flex flex-col items-start "
                    id="about"
                >
                    <p style={{ color: "#7B899D" }} className="p-2">
                        I first started programming in java in my 10th grade, 11 and 12th
                        were spent on C and C++
                    </p>
                    <p style={{ color: "#7B899D" }} className="p-2">
                        My Enginerring made me forget everything. So now i am a Frontend
                        Developer who create large Scalable apps on React and Next JS with
                        Typescript and Javascript
                    </p>
                    <p style={{ color: "#7B899D" }} className="p-2">
                        In my Free Time I Like to read military theory books, watch horror
                        movies and take long walks
                    </p>
                </Box>
                <span className=" md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
                    Experiance
                </span>
                <a href="https://credextechnology.com/">
                    <Box
                        className="w-full md:p-14 p-6 flex flex-col items-start cursor-pointer mb-4"
                        id="exp"
                        sx={{
                            "&:hover": {
                                boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                                backgroundColor: "rgba(255, 255, 255, 0.008)",
                                width: "100%",
                            },

                        }}
                    >
                        <Box
                            className="flex gap-3 text-white"
                            sx={{
                                "@media(max-width:600px)": {
                                    display: "flex",
                                    flexDirection: "column",
                                },
                            }}
                        >
                            <p className="w-100 whitespace-nowrap">2023-2024</p>
                            <Box>
                                <div className="flex text-white font-bold mb-2 gap-2">
                                    <p>Associate Software Developer. Credex Technology</p>
                                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                                </div>
                                <div>
                                    <p className="mb-4">
                                        Developed the frontend user interface for the MaxSold
                                        platform, a Canadian-based company specializing in online
                                        estate auctions. Created intuitive and visually appealing
                                        user interfaces using React.js and Sass, ensuring a seamless
                                        user experience for online auction participants. Worked on
                                        CSD creating ui for Canteen services department of india
                                    </p>
                                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                                        <Button variant="outlined">Javascript</Button>
                                        <Button variant="outlined">Typescript</Button>
                                        <Button variant="outlined">Jest </Button>
                                        <Button variant="outlined">React JS </Button>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </a>
                <a href="/resume.pdf">
                    <Box className="w-full md:p-14 p-6 flex gap-2 mb-4">
                        <p className="font-bold text-white cursor-pointer">
                            View Full Resume
                        </p>
                        <ArrowOutwardIcon sx={{ color: "#fff" }} />
                    </Box>
                </a>
                <span className=" md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
                    Projects
                </span>
                <a href="https://beer-app-proj.netlify.app/">
                    <Box
                        className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
                        id="project"
                        sx={{
                            "&:hover": {
                                boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                                backgroundColor: "rgba(255, 255, 255, 0.008)",
                            },
                        }}
                    >
                        <Box
                            className="flex gap-3 text-white"
                            sx={{
                                "@media(max-width:600px)": {
                                    display: "flex",
                                    flexDirection: "column",
                                },
                            }}
                        >
                            <Image
                                src={beer}
                                alt="beer"
                                style={{ width: "100px", height: "80px" }}
                            />
                            <Box>
                                <div className="flex text-white font-bold mb-2 gap-2">
                                    <p>Beer App</p>
                                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                                </div>
                                <div>
                                    <p className="mb-4">
                                        Using Bear API, to show various bears on change, implemented
                                        infinite scroll and lazy routing
                                    </p>
                                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                                        <Button variant="outlined">React JS</Button>
                                        <Button variant="outlined">Typescript</Button>
                                        <Button variant="outlined">SASS </Button>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </a>
                <a href="https://nqueens-viz.netlify.app/">
                    <Box
                        className="w-full md:p-14 p-6 flex flex-col items-start cursor-pointer mb-4"
                        sx={{
                            "&:hover": {
                                boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                                backgroundColor: "rgba(255, 255, 255, 0.008)",
                            },
                        }}
                    >
                        <Box
                            className="flex gap-3 text-white"
                            sx={{
                                "@media(max-width:600px)": {
                                    display: "flex",
                                    flexDirection: "column",
                                },
                            }}
                        >
                            <Image
                                src={nqueens}
                                alt="nqueens"
                                style={{ width: "100px", height: "80px" }}
                            />
                            <Box>
                                <div className="flex text-white font-bold mb-2 gap-2">
                                    <p>N-Queens</p>
                                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                                </div>
                                <div>
                                    <p className="mb-4">
                                        Implemented a visualiztion of the famous n-queens Problem
                                    </p>
                                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                                        <Button variant="outlined">React JS</Button>
                                        <Button variant="outlined">Javascript</Button>
                                        <Button variant="outlined">SASS </Button>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </a>
                <p
                    className="w-full p-14 md:text-base text-sm"
                    style={{ color: "#7B899D" }}
                >
                    Made on Visual Studio, Built with Next js and Tailwind, Deployed with
                    Netlify
                </p>
            </Grid>
        </Grid>
    );
};
export default Meat;