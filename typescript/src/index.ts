import { Shape } from './shapes/shape.js';
import { Rectangle } from './shapes/rectangle.js';
import { newRenderer } from './renderer.js';


const rectangle: Shape = Rectangle(5, 10);
const renderer = newRenderer(rectangle)
renderer.draw();
