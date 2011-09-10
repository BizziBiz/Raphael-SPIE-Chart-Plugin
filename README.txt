# Raphaël - SPIE Chart Plugin

### What is a SPIE chart?

A SPIE chart superimposes a normal pie chart with a modified polar area chart
to permit the comparison of a set of data at two different states. This chart
type is relatively new, pioneered by Dror G. Feitelson in 2003. You can read
his original research paper [here][1].

   [1]: http://www.cs.huji.ac.il/~feit/papers/Spie03TR.pdf

### What browsers are supported?

Currently Firefox 4+, Chrome 11+, and Safari 5+ have been tested and verified
working. IE 7, 8, and 9 have some issues with the current implementation.

### How do I use it?

Each segment is defined in decimal percentage form. For a SPIE chart split in
half, with each half 70% full you would define 2 segments; Each with a value
of 0.5, and a fill of 0.70. All available options are described by Example 1
below.

#### Example 1

    
    
    showSpieChart({
    	radius : 100,
    	id: "example1",
    	animate: true,
    	animation: "elastic",
    	speed: 200,
    	hex: "#52718c",
    	hexfill: "#b1cce3",
    	stroke: "white",
    	segments : [
    		{value : 0.396226415094, fill : 0.12},
    		{value : 0.235849056604, fill : 0.92},
    		{value : 0.202830188679, fill : 0.56},
    		{value : 0.165094339623, fill : 1.2},
    	], 
    });

#### Example 2

    
    
    showSpieChart({
    	radius : 50,
    	id: "example2",
    	hex: "#E8DDCB",
    	hexfill: "#036564",
    	stroke: "#CDB380",
    	segments : [
    		{value : 0.214285714286, fill : 0.73},
    		{value : 0.285714285714, fill : 0.3},
    		{value : 0.357142857143, fill : 0.52},
    		{value : 0.142857142857, fill : 0.8},
    	], 
    });

### Sponsorship

This plugin is sponsored by [Bizzibiz][2]. Bizzibiz provides digital marketing
services for small and medium business. Visit Bizzbiz at
[http://bizzibiz.com][2].

   [2]: http://bizzibiz.com

### License

    
    
    Copyright 2011 Bizzibiz.
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
       http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    		

### 3rd Party Licenses

This project uses code originally written by Zevan Rosser
([http://zreference.com][3]). The inclusion of this notice does not imply
endorsement nor promotion by Zevan Rosser.

    
       [3]: http://zreference.com/

    Copyright (C) 2011 by Zevan Rosser
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    		
    		

