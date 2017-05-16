package designPatterns.abstractFactory.concrete;

import designPatterns.abstractFactory.interfaces.Shape;

public class Circle implements Shape {

	@Override
	public void draw() {
		System.out.println("Drawing Circle!");
	}

}
