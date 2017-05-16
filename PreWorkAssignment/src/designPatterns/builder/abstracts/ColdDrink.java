package designPatterns.builder.abstracts;

import designPatterns.builder.interfaces.Item;
import designPatterns.builder.interfaces.Packing;

public abstract class ColdDrink implements Item {

	@Override
	public String name() {
		return null;
	}

	@Override
	public Packing packing() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public float price() {
		// TODO Auto-generated method stub
		return 0;
	}

}
