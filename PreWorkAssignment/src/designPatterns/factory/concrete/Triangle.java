package designPatterns.factory.concrete;

import designPatterns.factory.interfaces.Shape;

public class Triangle implements Shape {

	@Override
	public void draw() {
		System.out.println("Drawing Triangle!");
	}

}
