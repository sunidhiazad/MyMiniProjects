package designPatterns.abstractFactory.factories;

import designPatterns.abstractFactory.factories.ColorFactory;

public class FactoryProducer {
	public static AbstractFactory getFactory(String choice) {

		if (choice.equalsIgnoreCase("SHAPE")) {
			return new ShapeFactory();

		} else if (choice.equalsIgnoreCase("COLOR")) {
			return new ColorFactory();
		}

		return null;
	}
}
