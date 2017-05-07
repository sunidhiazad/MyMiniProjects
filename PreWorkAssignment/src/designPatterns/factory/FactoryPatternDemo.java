package designPatterns.factory;

public class FactoryPatternDemo {

	public static void main(String[] args) {
		ShapeFactory factory = new ShapeFactory();
		Shape rectangle = factory.getShape("RECTANGLE");
		rectangle.draw();
		Shape circle = factory.getShape("CIRCLE");
		circle.draw();
		Shape triangle = factory.getShape("TRIANGLE");
		triangle.draw();
	}

}
