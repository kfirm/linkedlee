(function (global) {

    "use strict";

    function Node(_value, _next, _prev) {

        var value = _value;
        var next = _next;
        var prev = _prev;


        this.next = function () {
            return next;
        };

        this.prev = function () {
            return prev;
        };

        this.value = function () {
            return value;

        };

        this.setNext = function (node) {
            next = node;
        };

        this.setPrev = function (node) {
            prev = node;
        };

        this.setValue = function (_value) {
            value = _value;
        };


        this.remove = function () {

            if (next && prev) {
                next.setPrev(this.prev());
                prev.setNext(this.next())
            } else if (next) {
                next.setPrev(null);
            } else if (prev) {
                prev.setNext(null);
            }
        };

    }

    Node.prototype.swap = function (node) {

        var tempAPrev = this.prev();

        this.setNext(node.next());
        this.setPrev(node);

        node.setNext(this);
        node.setPrev(tempAPrev);
    };

    /**
     * Reverse the list.
     * If the list is circular it will stop on when reaching the first node again.
     *
     */
    Node.prototype.reverse = function () {

        var firstNode = this;

        var currentNode = this;

        do {
            var next = currentNode.next();

            currentNode.setNext( currentNode.prev() );
            currentNode.setPrev( next );

            currentNode = next;

        } while (currentNode && firstNode !== currentNode);
    };

    function LinkedList(maxSize) {

        var nodes = [];
        var isLooped = false;

        function swap(indexA, indexB) {
            var tempValue = nodes[indexB];
            nodes[indexB] = nodes[indexA];
            nodes[indexA] = tempValue;
        }

        function isMaxLengthExceeded() {
            if (maxSize === null || maxSize === undefined || !Number.isInteger(maxSize) || maxSize <= 0){
                return false;
            } else {
                return maxSize <= nodes.length;
            }
        }

        function getNode(value) {
            var node = null;

            if (nodes.length === 0) {
                node = new Node(value, null, null);
            } else {

                var prevNode = nodes[nodes.length - 1];

                node = new Node(value, null, prevNode);
                prevNode.setNext(node);
            }

            return node;
        }

        this.push = function (value) {

            if (!isMaxLengthExceeded()) {
                var node = getNode(value);
                nodes.push(node);
                return node;
            } else {
                return null;
            }
        };

        this.pushAt = function (index, value) {
            if (index && index > -1 && nodes.length > index) {

                // nodes[index].replace(value);
                nodes[index].setValue(value);

                return nodes[index];
            } else {
                return null;
            }
        };


        /**
         * Push a node to be the first item in the linked list
         * @param value of the node
         * @returns returns the inserted node - else returns null
         */
        this.pushTop = function (value) {
            if (!isMaxLengthExceeded()) {
                var node = getNode(value);
                nodes.splice(0, 0, node);
                return node;
            } else {
                return null;
            }
        };

        this.get = function (index) {
            return nodes[index];
        };

        this.remove = function (index) {
            if (index > 0 && nodes[index]){
                nodes[index].remove();
                nodes.splice(index, 1);
            }
        };

        this.size = function () {
            return nodes.length;
        };

        this.down = function (index) {
            if (nodes[index] && nodes[index + 1]) {
                nodes[index].swap(nodes[index + 1]);
            }

            swap(index, index + 1);
        };

        this.up = function (index) {
            if (nodes[index] && nodes[index - 1]) {
                nodes[index].swap(nodes[index - 1]);
            }

            swap(index, index - 1);
        };

        this.loop = function () {

            if (nodes.length) {
                isLooped = true;

                nodes[0].setPrev(nodes[nodes.length - 1]);
                nodes[nodes.length - 1].setNext(nodes[0]);
            }
        };

        this.unloop = function () {

            if (nodes.length) {
                isLooped = false;

                nodes[0].setPrev(null);
                nodes[nodes.length - 1].setNext(null);
            }
        };

        this.reverse = function () {
            if (nodes.length){
                nodes[0].reverse();
                nodes.reverse();
            }
        };

        this.clear = function () {
            nodes = [];
        };
    }

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = LinkedList;
    } else {
        global.LinkedList = LinkedList;
    }

})(typeof window !== "undefined" ? window : global);