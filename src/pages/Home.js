import React, { useState } from "react";
import { Box } from "@mui/material";
import Footer from "../Components/Footer";
import SearchExercises from "../Components/SearchExercises";
import HeroBanner from "../Components/HeroBanner";
import Exercises from "../Components/Exercises";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
 
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
      <Footer/>
    </Box>
  );
};

export default Home;
