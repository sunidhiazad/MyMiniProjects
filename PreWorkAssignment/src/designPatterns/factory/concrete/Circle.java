package designPatterns.factory.concrete;

import designPatterns.factory.interfaces.Shape;

public class Circle implements Shape {

	@Override
	public void draw() {
		System.out.println("Drawing Circle!");
	}

}
