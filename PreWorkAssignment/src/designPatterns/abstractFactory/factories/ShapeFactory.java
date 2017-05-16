package designPatterns.abstractFactory.factories;

import designPatterns.abstractFactory.concrete.Circle;
import designPatterns.abstractFactory.concrete.Rectangle;
import designPatterns.abstractFactory.concrete.Triangle;
import designPatterns.abstractFactory.interfaces.Color;
import designPatterns.abstractFactory.interfaces.Shape;

public class ShapeFactory extends AbstractFactory {

	public Shape getShape(String shapeType) {
		if (shapeType == null) {
			return null;
		}
		if (shapeType.equalsIgnoreCase("CIRCLE")) {
			return new Circle();

		} else if (shapeType.equalsIgnoreCase("RECTANGLE")) {
			return new Rectangle();

		} else if (shapeType.equalsIgnoreCase("TRIANGLE")) {
			return new Triangle();
		}

		return null;
	}

	@Override
	public Color getColor(String color) {
		return null;
	}

}
