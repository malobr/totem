/* import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import glassesImage from "@/assets/glasses/glasses1.png";

const VirtualGlassTryOn = () => {
  const webcamRef = useRef(null);
  const [detections, setDetections] = useState([]);
  const [loading, setLoading] = useState(true);
  const glassesImageRef = useRef(null); // Referência para a imagem do óculos

  // Carregar os modelos do face-api.js
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.ssdMobilenetv1.loadFromUri(
        "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights"
      );
      await faceapi.nets.faceLandmark68Net.loadFromUri(
        "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights"
      );
      await faceapi.nets.faceRecognitionNet.loadFromUri(
        "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights"
      );
      setLoading(false);
    };

    loadModels();

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        console.log("Câmera liberada!", stream);
      })
      .catch(function (error) {
        console.error("Erro ao acessar a câmera:", error);
      });
  }, []);

  // Função para detectar o rosto e atualizar as deteções
  const handleVideo = async () => {
    if (webcamRef.current && !loading) {
      const detections = await faceapi
        .detectAllFaces(
          webcamRef.current.video,
          new faceapi.SsdMobilenetv1Options()
        )
        .withFaceLandmarks()
        .withFaceDescriptors();

      setDetections(detections);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => handleVideo(), 100);
    return () => clearInterval(interval);
  }, [loading]);

  // Função para desenhar os óculos sobre a webcam
  const drawGlasses = (context, landmarks) => {
    if (glassesImageRef.current && landmarks) {
      const leftEye = landmarks.getLeftEye();
      const rightEye = landmarks.getRightEye();

      const eyeDistance = Math.abs(leftEye[0].x - rightEye[3].x);
      const glassesWidth = eyeDistance * 2;

      const glassesHeight = glassesWidth / 2;

      const glassesX = leftEye[0].x - glassesWidth / 2;
      const glassesY = leftEye[1].y - glassesHeight / 2;

      context.drawImage(
        glassesImageRef.current,
        glassesX,
        glassesY,
        glassesWidth,
        glassesHeight
      );
    }
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      className="max-w-[500px] max-h-[500px]"
    >
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: "user",
        }}
        width="100%"
        height="auto"
        onUserMediaError={(error) => {
          console.error("Erro ao acessar a webcam:", error);
          alert(
            "Erro ao acessar a câmera. Verifique as permissões do navegador."
          );
        }}
      />
      <canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        width="100%"
        height="auto"
      />
      <img
        ref={glassesImageRef}
        src={glassesImage}
        alt="Virtual Glasses"
        style={{ display: "none" }}
      />
      {detections.length > 0 && (
        <canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
          ref={(canvas) => {
            if (canvas) {
              const context = canvas.getContext("2d");
              canvas.width = webcamRef.current?.video.videoWidth;
              canvas.height = webcamRef.current?.video.videoHeight;
              detections.forEach((detection) => {
                drawGlasses(context, detection.landmarks);
              });
            }
          }}
        />
      )}
    </div>
  );
};

export default VirtualGlassTryOn;
 */