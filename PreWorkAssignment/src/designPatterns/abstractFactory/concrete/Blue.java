package designPatterns.abstractFactory.concrete;

import designPatterns.abstractFactory.interfaces.Color;

public class Blue implements Color {

	@Override
	public void fill() {
		System.out.println("Inside Blue::fill method");
	}

}