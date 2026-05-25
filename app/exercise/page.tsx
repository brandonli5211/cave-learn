'use client'
import ExerciseBoard from "@/components/exercise/ExerciseBoard"
import Subheader from "@/components/exercise/Subheader"
import Sidebar from "@/components/exercise/Sidebar"
import { Box } from "@mui/material";
import { useState } from 'react'
import { CA_COMPONENTS } from "@/lib/ca-data";
import { DragDropProvider } from "@dnd-kit/react"

export default function ExercisePage() {
  const [isPlaced, setIsPlaced] = useState(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));
  const [isFilled, setIsFilled] = useState(Object.fromEntries(CA_COMPONENTS.map((component, _) => [component.id, ""])));

  return <main className="page-shell">
    <Subheader />
    {/* the header will be 56px and the subheader will be 77px */}
    <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', height: 'calc(100vh - 133px)'}}>
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
          <ExerciseBoard isFilled={isFilled}/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden'}}>
          <Sidebar isPlaced={isPlaced}/>
        </Box>
      </DragDropProvider>
    </Box>
  </main>
}
