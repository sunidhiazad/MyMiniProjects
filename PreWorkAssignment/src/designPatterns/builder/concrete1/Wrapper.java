package designPatterns.builder.concrete1;

import designPatterns.builder.interfaces.Packing;

public class Wrapper implements Packing {

	@Override
	public String pack() {
		return "Wrapper";
	}

}
