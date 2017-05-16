package designPatterns.abstractFactory.concrete;

import designPatterns.abstractFactory.interfaces.Color;


public class Green implements Color {

	@Override
	public void fill() {
		System.out.println("Inside Green::fill method");
	}

}