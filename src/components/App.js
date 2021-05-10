import React, { Component } from "react";
import axios from "axios";

import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Button from "./Button/Button";
import Loaderr from "./Loader/Loaderr";
import Modal from "./Modal/Modal";

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    serchQuery: "",
    isLoading: false,
    showModal: false,
    largeImg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.serchQuery !== this.state.serchQuery) {
      this.fetchImages();
    }
    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onChangeQuery = (query) => {
    this.setState({ serchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { currentPage, serchQuery } = this.state;
    this.setState({ isLoading: true });
    try {
      axios
        .get(
          `https://pixabay.com/api/?q=${serchQuery}&page=${currentPage}&key=21141899-d12f3e8c226ff0cb5e95b71a3&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((res) => {
          this.setState((prevState) => ({
            images: [...prevState.images, ...res.data.hits],
            currentPage: prevState.currentPage + 1,
          }));
          console.log(currentPage);
        })
        .finally(() => this.setState({ isLoading: false }));
    } catch (error) {}
  };

  largeImgHendler = (e) => {
    console.log(this.state.images);
    console.log(e.target);
    const largeImageURL = e.target.dataset.source;
    this.setState({ largeImg: largeImageURL });
    this.hendelTogalModal();
  };
  hendelTogalModal = () => {
    this.setState((prevSt) => ({ showModal: !prevSt.showModal }));
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery
          images={this.state.images}
          largeImgHendler={this.largeImgHendler}
        />
        <Loaderr loading={this.state.isLoading} />
        <Button onLoadMore={this.fetchImages} images={this.state.images} />
        <Modal
          open={this.state.showModal}
          onClose={this.hendelTogalModal}
          largeImg={this.state.largeImg}
        />
      </>
    );
  }
}
