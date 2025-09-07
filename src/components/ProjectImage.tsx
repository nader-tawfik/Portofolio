import React from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  customStyles?: React.CSSProperties;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  customStyles,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "250px",
        ...customStyles,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default ProjectImage;
