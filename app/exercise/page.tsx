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
TODO:
Reformat the page to look like figma. -- Wednesday
  Whether or not something is an interface or DS will be a tiny section above the button. -- DO LAST

DONE AND TESTED


Hook up the button so clicking them actually does something and start working on results page -- Thursday - Friday.
  When you validate your score, the sidebar should change to show your score in a circle (check figma).
  When you validate your score, all correct components should have a green outline and all incorrect components should have a red outline. If no validation is done, there should be no outline.
    Just create a separate class and based on the prop passed in, concatenate the appropriate class. Each class has different outline (or none).
      Use "?" operator and if isPlaced[component.id] is "", pass in null. Otherwise, check correctness.
  There will be the option to retry (should be the same as reset).
  Might have to place the entire page into drag drop provider. -- WILL TEST WHEN SCORE IS IMPLEMENTED
    Make sure all buttons still work.
    Subheader is no longer above the sidebar -- should move to same container as exercise board.
*/

export default function ExercisePage() {
  const [isPlaced, setIsPlaced] = useState(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
  const [isFilled, setIsFilled] = useState(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
  const [score, setScore] = useState(0);

  function resetBoard(){
    setIsPlaced(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])))
    setIsFilled(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])))
    setScore(0)
  }

  function checkWork(){
    // Need to create a "score" state variable -- make sure to also reset this when you reset the board
    setScore(Object.entries(isFilled).filter((componentDroppable) => (componentDroppable[0] == componentDroppable[1])).length);

  }

  return <main className="page-shell">
    {/* the header will be 56px and the subheader will be 77px */}
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
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', flexGrow: 1}}>
          <Subheader />
          <ExerciseBoard isFilled={isFilled}/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden'}}>
          <Sidebar isPlaced={isPlaced}/>
        </Box>
      </DragDropProvider>
    </Box>
  </main>
}
