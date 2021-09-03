import { createMedia } from "@artsy/fresnel";

const ExampleAppMedia = createMedia({
  breakpoints: {
    sm: 0,
    lg: 800,
  },
});

export const mediaStyles = ExampleAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = ExampleAppMedia;
