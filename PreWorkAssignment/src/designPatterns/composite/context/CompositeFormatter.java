package designPatterns.composite.context;

import java.util.List;

import designPatterns.composite.interfaces.MessageFormatter;

public class CompositeFormatter implements MessageFormatter {

	List<MessageFormatter> formatters;

	public CompositeFormatter(List<MessageFormatter> formatters) {
		this.formatters = formatters;
	}

	@Override
	public String format(String message) {
		for (MessageFormatter formatter : formatters) {
			message = formatter.format(message);
		}
		return message;
	}

}
