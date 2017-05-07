package designPatterns.factory;

public class ShapeFactory extends AbstractFactory{

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
	Color getColor(String color) {
		return null;
	}

	
	
}
