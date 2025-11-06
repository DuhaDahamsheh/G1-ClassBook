import React, { useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ValidationAlert from "../Popup/ValidationAlert";
import "./Page8_Q2.css";
import img1 from "../../assets/page-8-q2-img1.png";
import img2 from "../../assets/page-8-q2-img2.png";
import img3 from "../../assets/page-8-q2-img3.png";
import img4 from "../../assets/page-8-q2-img4.png";

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
    if (!result.destination) return;

    const { destination, draggableId } = result;

    // Dropping back into letters area
    if (destination.droppableId === "letters") {
      const newDropped = { ...droppedLetters };
      const prevDrop = Object.keys(newDropped).find(
        (key) => newDropped[key] === draggableId
      );
      if (prevDrop) newDropped[prevDrop] = null;
      setDroppedLetters(newDropped);
      return;
    }

    // Normal drop into a drop box
    const newDropped = { ...droppedLetters };

    // If it was in another drop box before, clear that drop box
    const previousDrop = Object.keys(newDropped).find(
      (key) => newDropped[key] === draggableId
    );
    if (previousDrop) newDropped[previousDrop] = null;

    newDropped[destination.droppableId] = draggableId;

    setDroppedLetters(newDropped);
  };

  const resetExercise = () => {
    setDroppedLetters(initialDroppedState);
    setShuffledPairs(getShuffledPairs());
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
        <h5 className="header-title-page8">
          <span className="number-of-q">2</span>Look and write.
        </h5>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          {/* WORDS SECTION */}
          <div className="word-container">
            <Droppable droppableId="letters" direction="horizontal">
              {(provided) => (
                <div
                  className="letters-section-horizontal"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {shuffledPairs
                    .filter((pair) => !Object.values(droppedLetters).includes(pair.letter))
                    .map((pair, index) => (
                      <Draggable draggableId={pair.letter} index={index} key={pair.id}>
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
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* IMAGE + DROP ZONES */}
          <div className="exercise-layout-vertical">
            <div className="image-section-horizontal">
              {exerciseData.images.map((imageSrc, index) => (
                <Droppable key={`drop-${index + 1}`} droppableId={`drop-${index + 1}`}>
                  {(provided, snapshot) => (
                    <div className="image-container">
                      <img src={imageSrc} alt={`Visual hint ${index + 1}`} />
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`drop-box ${snapshot.isDraggingOver ? "is-over" : ""}`}
                      >
                        {droppedLetters[`drop-${index + 1}`] ? (
                          <Draggable
                            draggableId={droppedLetters[`drop-${index + 1}`]}
                            index={0}
                          >
                            {(providedDraggable) => (
                              <div
                                ref={providedDraggable.innerRef}
                                {...providedDraggable.draggableProps}
                                {...providedDraggable.dragHandleProps}
                                className="dropped-letter"
                              >
                                {droppedLetters[`drop-${index + 1}`]}
                              </div>
                            )}
                          </Draggable>
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

        {/* ACTION BUTTONS */}
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
