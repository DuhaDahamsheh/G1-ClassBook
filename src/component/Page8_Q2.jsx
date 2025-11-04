import React, { useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ValidationAlert from "./Popup/ValidationAlert";
import "./Page8_Q2.css";
import img1 from "../assets/page-8-q2-img1.png";
import img2 from "../assets/page-8-q2-img2.png";
import img3 from "../assets/page-8-q2-img3.png";
import img4 from "../assets/page-8-q2-img4.png";

const exerciseData = {
  pairs: [
    { id: "pair-1", letter: "Table", content: "Table" },
    { id: "pair-2", letter: "Taxi", content: "Taxi" },
    { id: "pair-3", letter: "Deer", content: "Deer" },
    { id: "pair-4", letter: "Dish", content: "Dish" },
  ],
  images: [img1, img2, img3, img4],
};

const getShuffledPairs = () =>
  [...exerciseData.pairs].sort(() => Math.random() - 0.5);

const Page8_Q2 = () => {
  const initialDroppedState = {
    "drop-1": null,
    "drop-2": null,
    "drop-3": null,
    "drop-4": null,
  };

  const [droppedLetters, setDroppedLetters] = useState(initialDroppedState);
  const [shuffledPairs, setShuffledPairs] = useState(getShuffledPairs());
  const audioRef = useRef(null);

  const handleOnDragEnd = (result) => {
    if (!result.destination || result.destination.droppableId === "letters")
      return;

    const { source, destination, draggableId } = result;
    const letterToMove = draggableId;

    const prevDropZoneId = Object.keys(droppedLetters).find(
      (key) => droppedLetters[key] === letterToMove
    );
    const newDroppedLetters = { ...droppedLetters };
    if (prevDropZoneId) {
      newDroppedLetters[prevDropZoneId] = null;
    }

    newDroppedLetters[destination.droppableId] = letterToMove;

    setDroppedLetters(newDroppedLetters);
  };

  const resetExercise = () => {
    setDroppedLetters(initialDroppedState);
    setShuffledPairs(getShuffledPairs());
    if (ValidationAlert && typeof ValidationAlert.close === "function") {
      ValidationAlert.close();
    }
  };

  const checkAnswers = () => {
    const allFilled = Object.values(droppedLetters).every((v) => v !== null);
    if (!allFilled) {
      ValidationAlert.info("Oops!", "Please complete all fields.");
      return;
    }
    const isCorrect = exerciseData.pairs.every((pair, index) => {
      const dropZoneId = `drop-${index + 1}`;
      return droppedLetters[dropZoneId] === pair.letter;
    });
    if (isCorrect) {
      ValidationAlert.success("Good Job!", "All answers are correct!");
    } else {
      ValidationAlert.error("Try Again!", "Some answers are incorrect.");
    }
  };

  return (
    <>
      <div className="exercise-container2">
        <h5
          className="header-title-page8"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <span className="number-of-q">2.</span>Look and write.
        </h5>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="word-container">
            <Droppable
              droppableId="letters"
              direction="horizontal"
              isDropDisabled={true}
            >
              {(provided) => (
                <div
                  className="letters-section-horizontal"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {shuffledPairs.map((pair, index) => (
                    <div key={pair.id} className="letter-sentence-pair">
                      <Draggable draggableId={pair.letter} index={index}>
                        {(providedDraggable, snapshot) => (
                          <div
                            ref={providedDraggable.innerRef}
                            {...providedDraggable.draggableProps}
                            {...providedDraggable.dragHandleProps}
                            className={`letter-box ${
                              snapshot.isDragging ? "dragging" : ""
                            }`}
                          >
                            {pair.letter}
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
          <div className="exercise-layout-vertical">
            <div className="image-section-horizontal">
              {exerciseData.images.map((imageSrc, index) => (
                <Droppable
                  key={`drop-${index + 1}`}
                  droppableId={`drop-${index + 1}`}
                >
                  {(provided, snapshot) => (
                    <div className="image-container">
                      <img src={imageSrc} alt={`Visual hint ${index + 1}`} />
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`drop-box ${
                          snapshot.isDraggingOver ? "is-over" : ""
                        }`}
                      >
                        {droppedLetters[`drop-${index + 1}`] ? (
                          <div className="dropped-letter">
                            {droppedLetters[`drop-${index + 1}`]}
                          </div>
                        ) : (
                          <span className="placeholder"></span>
                        )}
                        {provided.placeholder}
                      </div>
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </div>
        </DragDropContext>

        <div className="action-buttons-container">
          <button onClick={resetExercise} className="try-again-button">
            Start Again ↻
          </button>
          <button onClick={checkAnswers} className="check-button2">
            Check Answer ✓
          </button>
        </div>
      </div>
    </>
  );
};

export default Page8_Q2;
