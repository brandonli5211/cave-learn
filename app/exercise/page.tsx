'use client'
import ExerciseBoard from "@/components/exercise/ExerciseBoard"
import Subheader from "@/components/exercise/Subheader"
import Sidebar from "@/components/exercise/Sidebar"
import { Box } from "@mui/material";
import { useState } from 'react'
import { CA_COMPONENTS } from "@/lib/ca-data";
import { DragDropProvider } from "@dnd-kit/react"
// app/exercise/page.tsx  —  Exercise page  (route: /exercise)
// Drag-and-drop lesson: place every CA component into its correct layer.
// See the mockup in the project Figma / design images for the full spec.

/*
  ---DONE AND NOT TESTED---
  When you validate your score, the sidebar should change to show your score in a circle (check figma).
    Make sure circle fills up depending on score.
*/

export default function ExercisePage() {
  const [isPlaced, setIsPlaced] = useState(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
  const [isFilled, setIsFilled] = useState(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
  // Might not be necessary to have this since we can just look at isPlaced to figure out what the score is.
  const [score, setScore] = useState(0);
  // if isVerified, the sidebar will change to show the score and an option to retry.
  const [isVerified, setIsVerified] = useState(false);

  function resetBoard(){
    setIsPlaced(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
    setIsFilled(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
    console.log(isVerified);
    console.log(score);
    console.log(isPlaced);
    console.log(isFilled);
  }

  function retryBoard(){
    setIsVerified(false);
    setIsPlaced(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
    setIsFilled(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
    setScore(0);
    console.log(isVerified);
    console.log(score);
    console.log(isPlaced);
    console.log(isFilled);
  }

  function checkWork(){
    // Need to create a "score" state variable -- make sure to also reset this when you reset the board
    setScore(Object.entries(isFilled).filter((componentDroppable) => (componentDroppable[0] == componentDroppable[1])).length);
    setIsVerified(true)
    console.log(isVerified);
    console.log(score);
    console.log(isPlaced);
    console.log(isFilled);
  }

  return <main className="page-shell">
    <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', height: 'calc(100vh - 56px)'}}>
      <DragDropProvider
        onDragEnd={(event: any) => {
          if(event.canceled || event.operation.target?.id == null){
            return
          }

          if(event.operation.target?.id == "sidebar-droppable"){
            if(isPlaced[event.operation.source?.id as string] == ""){
              return
            } else {
              setIsFilled({...(isFilled), [isPlaced[event.operation.source?.id as string] as string] : ""})
              setIsPlaced({...(isPlaced), [event.operation.source?.id as string] : ""})
            }
          } else {
            if(isPlaced[event.operation.source?.id as string] != "" && isPlaced[event.operation.source?.id as string] == event.operation.target?.id){
              return
            }

            if(isPlaced[event.operation.source?.id as string] == ""){
              if(isFilled[event.operation.target?.id as string] == ""){
                setIsPlaced({...(isPlaced), [event.operation.source?.id as string] : event.operation.target?.id as string})
              } else {
                const oldDraggable = isFilled[event.operation.target?.id as string]
                setIsPlaced({...(isPlaced), [oldDraggable] : "", [event.operation.source?.id as string] : event.operation.target?.id as string})
              }
              setIsFilled({...(isFilled), [event.operation.target?.id as string] : event.operation.source?.id as string})
            } else {
              const oldDroppable = isPlaced[event.operation.source?.id as string]
              if(isFilled[event.operation.target?.id as string] == ""){
                setIsFilled({...(isFilled), [oldDroppable] : "", [event.operation.target?.id as string] : event.operation.source?.id as string})
                setIsPlaced({...(isPlaced), [event.operation.source?.id as string] : event.operation.target?.id as string})
              } else {
                const oldDraggable = isFilled[event.operation.target?.id as string]
                setIsFilled({...(isFilled), [oldDroppable] : oldDraggable, [event.operation.target?.id as string]: event.operation.source?.id as string})
                setIsPlaced({...(isPlaced), [oldDraggable] : oldDroppable, [event.operation.source?.id as string]: event.operation.target?.id as string})
              }
            }
          }
          console.log(isVerified);
          console.log(score);
          console.log(isPlaced);
          console.log(isFilled);
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', flexGrow: 1}}>
          <Subheader />
          <ExerciseBoard isFilled={isFilled} isVerified={isVerified}/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden'}}>
          <Sidebar isPlaced={isPlaced} isVerified={isVerified} score={score} handleReset={resetBoard} handleRetry={retryBoard} handleCheckWork={checkWork}/>
        </Box>
      </DragDropProvider>
    </Box>
  </main>
}
