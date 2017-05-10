package general;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class GeneralOperations {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Map sortMapByValue(Map unsortMap) {
		List list = new LinkedList(unsortMap.entrySet());
		Collections.sort(list, new Comparator() {
			public int compare(Object o1, Object o2) {
				return ((Comparable) ((Map.Entry) (o1)).getValue()).compareTo(((Map.Entry) (o2)).getValue());
			}
		});
		Map sortedMap = new LinkedHashMap();
		for (Iterator it = list.iterator(); it.hasNext();) {
			Map.Entry entry = (Map.Entry) it.next();
			sortedMap.put(entry.getKey(), entry.getValue());
		}
		return sortedMap;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Map sortMapByValueAsc(Map unsortMap) {
		List list = new LinkedList(unsortMap.entrySet());
		Collections.sort(list, new Comparator() {
			public int compare(Object o2, Object o1) {
				return ((Comparable) ((Map.Entry) (o1)).getValue()).compareTo(((Map.Entry) (o2)).getValue());
			}
		});
		Map sortedMap = new LinkedHashMap();
		for (Iterator it = list.iterator(); it.hasNext();) {
			Map.Entry entry = (Map.Entry) it.next();
			sortedMap.put(entry.getKey(), entry.getValue());
		}
		return sortedMap;
	}

	public static List<String> tokenize(String line, String tokenizer) {
		return Arrays.asList(line.split(tokenizer));
	}

	public static void printMap(Map<?, ?> map) {
		for (Map.Entry<?, ?> entry : map.entrySet()) {
			System.out.println(entry.getKey() + " " + entry.getValue());
		}
	}

	public static <T> void printCollection(Collection<T> list) {
		System.out.println(list.stream().map(s -> s.toString()).collect(Collectors.joining(", ")));
	}

	public static <T> String convertCollectionToDelimitedString(Collection<T> coll, String delimiter) {
		return coll.stream().map(s -> s.toString()).collect(Collectors.joining(delimiter));
	}

	public static <T> void printArray(T[] arr) {
		System.out.println(Arrays.stream(arr).map(s -> s.toString()).collect(Collectors.joining(", ")));
	}

	public static <T> void swap(int i, int j, T[] array) {
		T temp;
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

}
