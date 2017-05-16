package designPatterns.abstractFactory.factories;

import designPatterns.abstractFactory.interfaces.Color;
import designPatterns.abstractFactory.interfaces.Shape;

public abstract class AbstractFactory {

	public abstract Color getColor(String color);

	public abstract Shape getShape(String shape);
}
