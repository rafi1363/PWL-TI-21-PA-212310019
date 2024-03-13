import React, { Component } from "react";
import backgroundImage from "../asset/744908.jpg"; // Pastikan lokasi file gambar benar

export default class ChapterOne extends Component {
  render() {
    // Style untuk membuat background image
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover", // Cover memastikan gambar menutupi seluruh bagian tanpa harus diulang
      backgroundPosition: "center", // Menempatkan gambar di tengah
      height: "85vh", // Mengatur tinggi ke seluruh layar
      width: "100%", // Mengatur lebar ke seluruh layar
    };

    return (
      <div style={backgroundStyle}>
        {" "}
        {/* Menambahkan style ke div */}
        <h1 className="text-center text-white fw-bold">
          Chapter One: The Beginning
        </h1>
      </div>
    );
  }
}
