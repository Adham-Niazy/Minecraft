import { TextureLoader } from 'three';

import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
} from './images';

const dirtTexture = new TextureLoader(dirtImg);
const grassTexture = new TextureLoader(grassImg);
const groundTexture = new TextureLoader(grassImg);
const glassTexture = new TextureLoader(glassImg);
const woodTexture = new TextureLoader(woodImg);
const logTexture = new TextureLoader(logImg);

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  groundTexture,
  woodTexture,
  logTexture
}