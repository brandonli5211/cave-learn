'use client'
import ExerciseBoard from "@/components/exercise/ExerciseBoard"
import { Box } from "@mui/material";
// app/exercise/page.tsx  —  Exercise page  (route: /exercise)
// Drag-and-drop lesson: place every CA component into its correct layer.
// See the mockup in the project Figma / design images for the full spec.

export default function ExercisePage() {
  return <main className="page-shell">
    <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', height: 'calc(100vh - 56px)'}}>
      <ExerciseBoard />
    </Box>
  </main>
}
