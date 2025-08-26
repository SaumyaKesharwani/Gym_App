
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { CircularProgress, Typography } from "@mui/material";

import { exerciseOptions, fetchData,youtubeOptions } from '../utils/fetchData';
const Detail = lazy(() => import("../Components/Detail"));
const ExerciseVideos = lazy(() => import("../Components/ExerciseVideos"));
const SimilarExercises = lazy(() => import("../Components/SimilarExercises"));

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
     
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
    <Suspense fallback={<CircularProgress />}>
  <Detail exerciseDetail={exerciseDetail} />
</Suspense>

<Suspense fallback={<Typography>Loading Videos...</Typography>}>
  <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
</Suspense>

<Suspense fallback={<Typography>Loading Similar Exercises...</Typography>}>
  <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
</Suspense>
    </Box>
  );
};

export default ExerciseDetail;
