const generateImageCandidates = imagesMetadata =>
  imagesMetadata
    .map(imageMetaData => {
      const widthDescriptor = `${imageMetaData.width}w`
      return `${imageMetaData.url} ${widthDescriptor}`
    })
    .join(', ')

export default generateImageCandidates
