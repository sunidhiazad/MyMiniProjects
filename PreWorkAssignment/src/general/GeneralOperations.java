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
import java.util.Set;

public class GeneralOperations {

	public static <T> void displayCollection(Collection<T> list) {
		System.out.println("***** PRINTING LIST *****");
		for (T item : list) {
			System.out.println(item);
		}
	}

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
		System.out.println("***** PRINTING MAP *****");
		for (Map.Entry<?, ?> entry : map.entrySet()) {
			System.out.println(entry.getKey() + " " + entry.getValue());
		}
	}
	
	public static <T> void printList(List<T> list){
		StringBuilder build = new StringBuilder("[");
	    for(T element: list){
	       build.append(element);
	       build.append(",");
	    }
	    build.deleteCharAt(build.length()-1);
	    build.append("]");
	    System.out.println(build.toString());
	}
	
	public static <T> void printSet(Set<T> list){
		StringBuilder build = new StringBuilder("[");
	    for(T element: list){
	       build.append(element);
	       build.append(",");
	    }
	    build.deleteCharAt(build.length()-1);
	    build.append("]");
	    System.out.println(build.toString());
	}
	
	public static <T> String convertListToString(List<T> list){
		StringBuilder build = new StringBuilder("[");
	    for(T element: list){
	       build.append(element);
	       build.append(",");
	    }
	    build.deleteCharAt(build.length()-1);
	    build.append("]");
	    return build.toString();
	}
	
	public static <T> void printArray(T[] arr){
	    for(T t: arr){
	       System.out.print(t+" ");
	    }
	    System.out.println("");
	}

	public static <T> void swap(int i, int j, T[] array) {
		T temp;
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	
}
