 class GenerateLetter

  # generar una matriz de 16x16
  def generate
    matrix = Array.new(16) { Array.new(16) }
    # se crea un rango de la a A la Z y se convierte en un array
    alphabet = ('A'..'Z').to_a
    array = []

    phrase =  Letter.all
    # llenamos nuestro array con el atributo de la clase letter (response)
    phrase.each do |word|
      array.push(word.response)
    end

    # se crea un rango de 0 a 15 en i y j y se llena con una letra aleatoria del array
    (0..15).each do |i|
      (0..15).each do |j|
        matrix[i][j] = alphabet[rand(26)]
        # puts "Hola [#{i}][#{j}] - #{matrix[i][j]}"
      end
    end

    completeWord(array, matrix)

  end

  # metodo para combinar las words con la matriz
  def  completeWord(word, matriz)

    i = 0
    while i < word.length
      if  i == 0
        word[i].length.times do |j|
          matriz[15][j] = word[i][j]
        end
      elsif  i == 1
        word[i].length.times do |j|
          matriz[i-1][j+1] = word[i][j]
        end
      elsif  i == 2
        word[i].length.times do |j|
          matriz[i][j] = word[i][j]
        end
      elsif  i == 3
        word[i].length.times do |j|
          matriz[j][15] = word[i][j]
        end
      elsif  i == 4
        word[i].length.times do |j|
          matriz[j][10] = word[i][j]
        end
      elsif  i == 5
        word.length.times do |j|
          matriz[10][j] = word[i][j]
        end
      end
      i  += 1
    end

    return matriz
  end


end