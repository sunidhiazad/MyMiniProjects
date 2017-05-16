package designPatterns.abstractFactory.concrete;

import designPatterns.abstractFactory.interfaces.Color;

public class Red implements Color {

	@Override
	public void fill() {
		System.out.println("Inside Red::fill method");
	}

}
