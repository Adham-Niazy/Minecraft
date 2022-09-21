import { NearestFilter, TextureLoader, RepeatWrapping } from 'three';

import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
} from './images';

// ALL TEXTURES
const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const groundTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);

// ADJUSTING TEXTURES TO BE PIXELATED
dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;

// ADJUST GROUND TEXTURE SPECIALLY
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  groundTexture,
  woodTexture,
  logTexture
}