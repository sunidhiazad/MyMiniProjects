package designPatterns.builder.concrete1;

import designPatterns.builder.interfaces.Packing;

public class Bottle implements Packing {

	@Override
	public String pack() {
		return "Bottle";
	}

}
