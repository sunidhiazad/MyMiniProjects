package designPatterns.factory.concrete;

import designPatterns.factory.interfaces.Shape;

public class Rectangle implements Shape {

	@Override
	public void draw() {
		System.out.println("Drawing Rectangle!");
	}

}
